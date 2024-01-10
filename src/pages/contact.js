import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { useState } from "react";


export default function Contact() {
  const [email, setEmail] = useState("");
  const [msgbod, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [active, setActive] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

      setActive(true);
      const res = await fetch("/api/api_four", {
        body: JSON.stringify({
          email: email,
          subject: subject,
          message: msgbod,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      
      const { msg, success } = await res.json();
      setError(error);
      setSuccess(success)
      

      if (success) {
        setSubject("");
        setEmail("");
        setMessage("");
        setActive(false);
      }
      else {
        setActive(false);
      }
    // const { msg } = await res.json();
    // setError(msg);

    // console.log("Error: ", error);
    
  };

  return (
    <>
      <Head>
        <title>Simple Portfolio Built with Nextjs | Articles Page</title>
        <meta name="description" content="Browse through CodeBucks's collection of software engineering articles and 
        tutorials on Next.js, React.js, web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Connect with me!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="bg-light border border-dark border-solid rounded-2xl dark:bg-dark dark:border-light">
            {/* <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16"> */}
              <section className="bg-Transparent">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                  <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                  <form onSubmit={handleSubmit} action="#" className="space-y-8">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@abc.com" required></input>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input onChange={(e) => setSubject(e.target.value)} value={subject} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="msgbod" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                      <textarea onChange={(e) => setMessage(e.target.value)} value={msgbod} id="msgbod" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" disabled={active} className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}>Send message</button>
                  </form> 
                  <div className="bg-slate-100 flex flex-col">
                    {active && (
                        <div
                          className={`text-blue-800 font-bold px-5 py-2`}
                        >
                          {active ? "Processing..." : ""}
                        </div>
                      )}
                  </div>
                  <div className="bg-slate-100 flex flex-col">
                    {success && (
                        <div
                          className={`${
                            success ? "text-green-800" : "text-red-600"
                          } px-5 py-2`}
                        >
                          {success ? "Thank you for contacting SKNAnalytics. We have receieved your mail." : "There is some issue we are working on it. Please try again."}
                        </div>
                      )}
                  </div>
                </div>
              </section>
            {/* </ul> */}
          </div>
          
        </Layout>
      </main>
    </>
  );
}
