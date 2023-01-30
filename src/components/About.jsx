import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import { Link } from "react-router-dom"
import Classprofile from "./Classprofile"
import { useState } from "react"

const Section = ({name, number, isVisible, setIsVisible}) => {
    return(
        <div className="border border-black p-10 m-10 justify-center">
            <div className="font-bold text-xl">Name: {name} </div>
            
            {isVisible ? (
                <button onClick={()=>{setIsVisible(false)}}>
                    Hide
                </button>
               ) : (
                <button onClick={()=>setIsVisible(true)}>
                    Show
                </button>
                )}
                {isVisible && <p>{number}</p>}
        </div>
    );
};

export default About = () => {
    const [visibleSection, setIsVisibleSection] = useState("");
    return(
        <div>

            <Section name={"Yash"} 
                number={"7803938479"}
                isVisible={visibleSection === "Yash"}
                setIsVisible={() => {visibleSection==="Yash"?(setIsVisibleSection("")):(setIsVisibleSection("Yash"))}
            }
            />
            <Section name={"Xyz"} 
                number={"123456789"}
                isVisible={visibleSection === "Xyz"}
                setIsVisible={() => {visibleSection==="Xyz"?(setIsVisibleSection("")):(setIsVisibleSection("Xyz"))}}    
            />
            <Section name={"Abc"} 
                number={"987654321"}
                isVisible={visibleSection === "Abc"} 
                setIsVisible={() => {visibleSection==="Abc"?(setIsVisibleSection("")):(setIsVisibleSection("Abc"))}}
            />

        </div>
    )
}