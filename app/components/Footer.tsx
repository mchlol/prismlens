import MBLogo from '../assets/mblogo.svg';


export default function Footer() {
    return(
        <p className="flex justify-between p-4 border-t-2 h-16">
            <small className="text-[0.65rem]">
                <strong>Disclaimer:</strong> This app is for fun only and no advice given should be taken seriously. 
            </small>
            
            <a href="https://michelle-brown.dev/" target="_blank" rel="noopener noreferrer">
                <img src={MBLogo} alt="MB logo" />
            </a>
        </p>
    )
}