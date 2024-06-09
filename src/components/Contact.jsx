// import { useState } from "react";

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: ""
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you can implement the logic to send the message using the formData
//         console.log("Form data submitted:", formData);
//         // Optionally, you can clear the form after submission
//         setFormData({
//             name: "",
//             email: "",
//             message: ""
//         });
//     };

//     return (
//         <section id="contact">
//             <div>
//                 <div>
//                     <div className="border-b border-neutral-900 pb-4">
//                         <h1 className="my-20 text-center text-4xl">Contact</h1>
//                         <form className="flex flex-col items-center" onSubmit={handleSubmit}>
//                             <div className="mb-4">
//                                 <label htmlFor="name" className="mr-2 text-neutral-400">Name:</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className="border border-neutral-400 rounded px-2 py-1"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="email" className="mr-2 text-neutral-400">Email:</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className="border border-neutral-400 rounded px-2 py-1"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="message" className="mr-2 text-neutral-400">Message:</label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                     rows={4}
//                                     className="border border-neutral-400 rounded px-2 py-1"
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700">Send Message</button>
//                         </form>
//                     </div>
//                 </div>
//                 <div>
//                     add here

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;


import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the logic to send the message using the formData
        console.log("Form data submitted:", formData);
        // Optionally, you can clear the form after submission
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <section id="contact" className="py-8 md:py-12 lg:py-16 px-4 ">
            <div className="container flex justify-around mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <div className="border   rounded-lg shadow-lg p-6">
                            <h1 className="my-8 lg:my-12 text-center lg:text-left text-4xl font-bold bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">Let’s work together!</h1>
                            <form className="flex flex-col items-center lg:items-start" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="border border-gray-800 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="border border-gray-800 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Your Message"
                                        className="border border-gray-800 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="mt-8 lg:mt-0 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start mb-4">
                                <FiPhone className="mr-2 text-blue-500" />
                                <span className="text-gray-400">01771814743</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start mb-4">
                                <FiMail className="mr-2 text-blue-500" />
                                <span className="text-gray-400">kawserahmed574@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start">
                                <FiMapPin className="mr-2 text-blue-500" />
                                <span className="text-gray-400">Badda Notun Bazar, Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

