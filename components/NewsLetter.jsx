import { useState } from "react";
import { client } from "../client";
import uniqid from 'uniqid';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = async () => {
        if (!email) {
            setError(true);
            return;
          }
        //console.log(email)
        try {
            const doc = {
                _type: 'newsLetter',
                _id: uniqid(),
                email,
              };
            client.createIfNotExists(doc).then(() => {
                setTimeout(() => {
                    setShowSuccessMessage(true);
                }, 3000);
                setEmail('');
           });
        }catch(error){
            console.log(error)
        }
    } 
    return(
        <div>
            <div className="bg-white justify-center flex-col item-center mt-8 shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-bold text-center border-b pb-4">Newsletter</h3>
            <p className="md:text-xl text-lg mb-8 font-semibold text-center pb-4">Subscribe to our weekly newsletter and stay updated</p>
            <div className="">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
            </div>
            {error && <p className="text-xs text-red-500">Email field cannot be blanck</p>}
            <div className="mt-8">
                <button type="button" onClick={handleSubmit} className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Subscribe</button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Email submitted successfully</span>}
            </div>
            </div>
        </div>
    )
}

export default NewsLetter;