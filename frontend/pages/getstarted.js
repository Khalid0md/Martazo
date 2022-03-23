
import { MainNavBar, TopSpacer } from "../components/NavBar"
import { AiFillCheckCircle } from "react-icons/ai";
import { GrDomain } from "react-icons/gr";
import { HiOutlineGlobe, HiOutlineGlobeAlt, HiViewGrid, HiViewGridAdd, HiCreditCard, HiReceiptTax } from "react-icons/hi";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineX } from "react-icons/hi";
import { useModal } from "../utils/ModalContext"
import { useWallet } from "../utils/WalletSessionProvider";
import { useEffect, useState } from "react";
const Web3 = require("web3");
import { TwitterPicker } from 'react-color';
import { useWalletConnect } from "../utils/WalletConnectSessionProvider";

// for ipfs upload
import { create as ipfsHttpClient } from 'ipfs-http-client'
const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

// reference store marketplace contract
import storeMarketplaceJson from '../../backend/artifacts/contracts/StoreMarketplace.sol/StoreMarketplace.json';
import { marketplaceAddress, storeMarketplaceAddress } from "../../backend/config";

// set page props
export async function getStaticProps(context) {
    return {
        props: {
            mainDomainRoute: true
        }
    };
}

export default function GetStarted() {

    // setup modal for configuring store
    const modalController = useModal()

    //const walletSession = useWallet();
    const walletConnectSession = useWalletConnect();

    // metamask
    const mmWalletSession = useWallet();

    return (
        <div className="flex flex-col w-full items-center bg-background h-full space-y-4">
            <TopSpacer />
            <MainNavBar />
            <div className="flex flex-col items-center h-full w-full max-w-[90rem] space-y-8 px-6 md:px-14">
                <PlansHeader />
                <div className="flex items-center justify-center w-full space-x-8 py-14 bg-background">
                    <BasicPlan modalController={modalController} walletSession={walletConnectSession} mmWalletSession={mmWalletSession} />
                    <UnlimitedPlan modalController={modalController} walletSession={walletConnectSession} mmWalletSession={mmWalletSession} />
                    <ProPlan modalController={modalController} walletSession={walletConnectSession} mmWalletSession={mmWalletSession} />
                </div>
            </div>
        </div>
    )
}

function GetStartedOld() {
    return (
        <div className="flex flex-col w-full items-center bg-background h-screen space-y-8">
            {/*<div className="w-full max-w-[90rem] bg-background">*/}

            <TopSpacer />
            <NavBar />

            {/*</div>*/}
            <PlansHeader />
            <div className="flex items-center justify-center w-full space-x-8 py-14 bg-background">
                <BasicPlan />
                <UnlimitedPlan />
                <ProPlan />
            </div>
        </div>
    )
}

function PlansHeader() {
    return (
        <div className="flex flex-col items-center space-y-4 max-w-2xl mx-14 pt-10">
            <p className="text-5xl nunito-font font-black">
                Choose your plan
            </p>
            <p className="nunito-font font-bold text-secondaryGray text-center">
                With Martazo, you can create your own NFT marketplace in seconds! All plans will provide you with a unique subdomain (e.g. yourname.martazo.com).
            </p>
        </div>
    )
}

function BasicPlan({ modalController, walletSession, mmWalletSession }) {
    return (
        <div className="flex flex-col w-[18rem] aspect-[3/5] bg-white rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl px-6 py-6 group space-y-4">
            <p className="-translate-x-2 flex w-full text-4xl nunito-font font-black text-accentGray group-hover:text-green1 transition-all duration-300 justify-center" >
                Basic
            </p>
            <div className="translate-x-1 translate-y-1 bg-green2 rounded-xl">
                <div className="-translate-x-2 -translate-y-2 flex space-x-2 bg-green1 p-4 mb-0 mr-0 rounded-xl text-white justify-center items-end">
                    <div className="text-5xl numbers-font font-black" >
                        <div className="inline-block h-full align-text-baseline" />
                        500
                    </div>
                    <div className="text-3xl nunito-font font-black">
                        <div className="inline-block h-full align-text-baseline" />
                        ONE
                    </div>
                </div>
            </div>
            <div className="flex grow justify-center">
                <div className="flex flex-col grow justify-center max-w-min space-y-6">
                    <ListItem icon={<HiCreditCard size={25} />} text={'One time payment'} space={4} />
                    <ListItem icon={<HiOutlineGlobeAlt size={25} />} text={'Custom subdomain'} space={4} />
                    <ListItem icon={<HiViewGrid size={25} />} text={'List up to 10 NFTs'} space={4} />
                    <ListItem icon={<HiReceiptTax size={25} />} text={'5% service fee'} space={4} />
                </div>
            </div>
            <button className="w-full h-14 bg-mainBlack rounded-2xl shadow-low"
                onClick={() => {
                    modalController.setContent(
                        <div />
                    )
                    modalController.setContent(
                        <ConfigureStoreModalContent plan="Basic" price={'500'} walletSession={walletSession} modalController={modalController} mmWalletSession={mmWalletSession} />
                    )
                    modalController.setIsShown(true);
                }}>
                <p className="text-white font-bold nunito-font">
                    Go Basic
                </p>
            </button>
        </div>
    )
}

function UnlimitedPlan({ modalController, walletSession, mmWalletSession }) {
    return (
        <div className="flex flex-col w-[20rem] aspect-[3/5] bg-white rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 px-6 py-6 group space-y-4">
            <p className="-translate-x-2 flex w-full text-4xl nunito-font font-black text-accentGray group-hover:text-green1 transition-all duration-300 justify-center" >
                Unlimited
            </p>
            <div className="translate-x-1 translate-y-1 bg-green2 rounded-xl">
                <div className="-translate-x-2 -translate-y-2 flex space-x-2 bg-green1 p-4 mb-0 mr-0 rounded-xl text-white justify-center items-end">
                    <div className="text-5xl numbers-font font-black" >
                        <div className="inline-block h-full align-text-baseline" />
                        2000
                    </div>
                    <div className="text-3xl nunito-font font-black">
                        <div className="inline-block h-full align-text-baseline" />
                        ONE
                    </div>
                </div>
            </div>
            <div className="flex grow justify-center">
                <div className="flex flex-col grow justify-center max-w-min space-y-8">
                    <ListItem icon={<HiCreditCard size={25} />} text={'One time payment'} space={8} />
                    <ListItem icon={<HiOutlineGlobeAlt size={25} />} text={'Custom subdomain'} space={8} />
                    <ListItem icon={<HiViewGrid size={25} />} text={'List unlimited NFTs'} space={8} />
                    <ListItem icon={<HiReceiptTax size={25} />} text={'1% service fee'} space={8} />
                </div>
            </div>
            <button className="w-full h-14 bg-mainBlack rounded-2xl shadow-low"
                onClick={() => {
                    modalController.setContent(
                        <ConfigureStoreModalContent plan="Unlimited" price={'2000'} walletSession={walletSession} modalController={modalController} mmWalletSession={mmWalletSession} />
                    )
                    modalController.setIsShown(true);
                }}>
                <p className="text-white font-bold nunito-font">
                    Go Unlimited
                </p>
            </button>
        </div>
    )
}

function ProPlan({ modalController, walletSession, mmWalletSession }) {
    return (
        <div className="flex flex-col w-[18rem] aspect-[3/5] bg-white rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl px-6 py-6 group space-y-4">
            <p className="-translate-x-2 flex w-full text-4xl nunito-font font-black text-accentGray group-hover:text-green1 transition-all duration-300 justify-center" >
                Pro
            </p>
            <div className="translate-x-1 translate-y-1 bg-green2 rounded-xl">
                <div className="-translate-x-2 -translate-y-2 flex space-x-2 bg-green1 p-4 mb-0 mr-0 rounded-xl text-white justify-center items-end">
                    <div className="text-5xl numbers-font font-black" >
                        <div className="inline-block h-full align-text-baseline" />
                        1000
                    </div>
                    <div className="text-3xl nunito-font font-black">
                        <div className="inline-block h-full align-text-baseline" />
                        ONE
                    </div>
                </div>
            </div>
            <div className="flex grow justify-center">
                <div className="flex flex-col grow justify-center max-w-min space-y-6">
                    <ListItem icon={<HiCreditCard size={25} />} text={'One time payment'} space={4} />
                    <ListItem icon={<HiOutlineGlobeAlt size={25} />} text={'Custom subdomain'} space={4} />
                    <ListItem icon={<HiViewGrid size={25} />} text={'List up to 100 NFTs'} space={4} />
                    <ListItem icon={<HiReceiptTax size={25} />} text={'3% service fee'} space={4} />
                </div>
            </div>
            <button className="w-full h-14 bg-mainBlack rounded-2xl shadow-low"
                onClick={() => {
                    modalController.setContent(
                        <ConfigureStoreModalContent plan="Pro" price={'1000'} walletSession={walletSession} modalController={modalController} mmWalletSession={mmWalletSession} />
                    )
                    modalController.setIsShown(true);
                }}>
                <p className="text-white font-bold nunito-font">
                    Go Pro
                </p>
            </button>
        </div>
    )
}

function ListItem({ icon, text, space }) {
    return (
        <div className={"flex whitespace-nowrap" + " space-x-" + space}>
            <p className="text-green2">
                {icon}
            </p>
            <p className="nunito-font font-bold">
                {text}
            </p>
        </div>
    )
}

/*
<div className="flex grow max-w-[90rem] items-center justify-center nunito-font font-black m-4 p-8 bg-white shadow-high rounded-2xl">
                <div className="flex flex-col grow space-y-4">
                    <div className="flex w-full text-4xl nunito-font font-black text-green1" >
                        <p>
                            {plan}
                        </p>
                        <div className="flex grow" />
                        <button className="aspect-square h-full text-mainBlack"
                            onClick={() => {
                                modalController.setIsShown(false);
                            }}>
                            <HiOutlineX />
                        </button>
                    </div>
                    <CreateStoreForm plan={plan.toLowerCase()} price={price} walletSession={walletSession} />
                </div>
            </div>
            */

function ConfigureStoreModalContent({ plan, price, walletSession, modalController, mmWalletSession }) {

    if (walletSession && walletSession.provider && walletSession.provider.accounts[0]) {
        return (
            <div className="flex grow max-w-[80rem] flex-col items-center justify-center nunito-font font-black m-4 p-8 bg-background shadow-high rounded-2xl">
                <div className="flex w-full text-4xl nunito-font font-black text-green1" >
                    <p>
                        {plan}
                    </p>
                    <div className="flex grow" />
                    <button className="text-4xl text-mainBlack"
                        onClick={() => {
                            modalController.setIsShown(false);
                        }}>
                        <HiOutlineX />
                    </button>
                </div>
                <div className="flex w-full flex-col grow space-y-4 px-32 py-16">
                    <CreateStoreForm plan={plan.toLowerCase()} price={price} walletSession={walletSession} mmWalletSession={mmWalletSession} />
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center nunito-font font-black m-4 p-8 bg-white shadow-high rounded-2xl">
            Please log in with MetaMask.
        </div>
    )
}//<div className="w-64 h-24 flex items-center justify-center nunito-font font-black">

function CreateStoreForm({ plan, price, walletSession, mmWalletSession }) {

    // form states
    const [name, setName] = useState()
    const [subdomain, setSubdomain] = useState()
    const [logoUri, setLogoUri] = useState()
    const [colourInHex, setColourInHex] = useState('FFFFFF')
    const walletConnectSession = useWalletConnect();

    const onSubmit = async (e) => {
        // prevents form from submitting early
        e.preventDefault();

        // Upload to ipfs (the url)
        uploadFile().then(async (uri) => {
            // we should have all info
            // TODO: *** perform any checks on the data (if necessary)

            /* METAMASK: (reintegrate later)
            if (window.ethereum && uri && walletSession.walletAddress) {
                const web3 = new Web3(window.ethereum);
                const payableAmount = web3.utils.toWei(price, "ether")
                const storeMarketplace = new web3.eth.Contract(storeMarketplaceJson.abi, storeMarketplaceAddress)
                const transaction = await storeMarketplace.methods.createStore(subdomain, colourInHex, plan, uri).send({ from: walletSession.walletAddress, value: payableAmount })
                console.log(transaction)
            }
            */

            // walletconnect:
            if (uri && walletSession.provider && walletSession.provider.accounts[0]) {
                //const web3 = new Web3(walletSession.provider);
                if (!mmWalletSession.walletAddress) {
                    await mmWalletSession.connectWallet();
                }
                const web3 = new Web3(window.ethereum);
                const payableAmount = web3.utils.toWei(price, "ether")
                const storeMarketplace = new web3.eth.Contract(storeMarketplaceJson.abi, storeMarketplaceAddress)
                const transaction = await storeMarketplace.methods.createStore(subdomain, colourInHex, plan, uri).send({ from: walletSession.provider.accounts[0], value: payableAmount })
                console.log(transaction)
            }
        })
    }

    const [image, setImage] = useState({})
    const [imagePreview, setImagePreview] = useState('')

    const createPreview = (e) => {
        if (e.target.value !== '') {
            setImage(e.target.files[0])
            const src = URL.createObjectURL(e.target.files[0])
            setImagePreview(src)
        } else {
            setImagePreview('')
        }
    }

    const uploadFile = async (e) => {
        try {
            const added = await ipfs.add(image)
            const uri = `https://ipfs.infura.io/ipfs/${added.path}`
            return uri;
            //setImageUri(added.path)
            //setImagePreview(uri)
        } catch (err) {
            console.log('Error uploading the file : ', err)
        }
    }

    return (
        <div className="w-full rounded-2xl">
            <form className="flex flex-col space-y-4" onSubmit={e => onSubmit(e)}>
                <div className="flex">
                    <div className="flex items-center justify-center flex-shrink-0 grow aspect-square rounded-2xl border-2 shadow-inner border-accentGray overflow-clip bg-white">
                        {
                            imagePreview
                                ?
                                <img src={imagePreview} className="max-h-14 object-contain p-2 border-2 rounded-xl" />
                                :
                                <label class="flex h-full grow items-center justify-center text-secondaryGray hover:bg-mainBlack/5 cursor-pointer">
                                    <input type="file" onChange={(e) => createPreview(e)} className="hidden" />
                                    <div className="flex flex-col items-center">
                                        <p className="text-5xl font-light">
                                            +
                                        </p>
                                        <p className="text-lg font-extrabold">
                                            Add Logo
                                        </p>
                                    </div>
                                </label>
                        }
                    </div>
                    <div className="flex flex-col space-y-4 grow pl-4">
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-text-field bg-white"
                        />
                        <input
                            name="subdomain"
                            type="text"
                            placeholder="subdomain (ex. yoursubdomain.martazo.com)"
                            value={subdomain}
                            onChange={(e) => setSubdomain(e.target.value)}
                            className="form-text-field bg-white"
                        />
                        {/*
                        <input
                            name="colourInHex"
                            type="text"
                            placeholder="colour (hex code)"
                            value={colourInHex}
                            onChange={(e) => setColourInHex(e.target.value)}
                            className="form-text-field"
                        />
                        */}
                        <div className="flex space-x-4">
                            <div style={{ backgroundColor: "#" + colourInHex }} className="flex grow rounded-2xl border-2 border-mainBlack/10 transition-colors duration-300" />
                            <TwitterPicker triangle={"hide"} onChange={(e) => setColourInHex(e.hex.substring(1)) } />
                        </div>
                        <div className="flex grow" />
                        <div className="flex justify-end">
                            <button type="submit" fill={true} className="shadow-wide flex h-16 px-8 text-lg nunito-font text-background whitespace-nowrap bg-mainBlack rounded-xl items-center justify-center font-extrabold max-w-min" >
                                Buy - {price} ONE
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

function ImagePreview({ imgSrc }) {
    return (
        <div className="flex items-center justify-center flex-shrink-0 grow aspect-square rounded-xl border-2 shadow-inner border-accentGray overflow-clip bg-white">
            {
                imgSrc
                    ?
                    <img src={imgSrc} className="min-w-full h-fit rounded-xl m-8" />
                    :
                    <button className="flex h-full grow items-center justify-center text-secondaryGray">
                        <div className="flex flex-col">
                            <p className="text-5xl font-light">
                                +
                            </p>
                            <p className="text-lg font-extrabold">
                                Add Photo
                            </p>
                        </div>
                    </button>
            }
        </div>
    )
}