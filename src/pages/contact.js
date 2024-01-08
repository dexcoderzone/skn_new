import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";


export default function Contact() {
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
              <section class="bg-Transparent">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                  <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                  <form action="#" class="space-y-8">
                    <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                      <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@abc.com" required></input>
                    </div>
                    <div>
                      <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                    </div>
                    <div class="sm:col-span-2">
                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                      <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}>Send message</button>
                  </form> 
                </div>
              </section>
            {/* </ul> */}
          </div>
          
        </Layout>
      </main>
    </>
  );
}
