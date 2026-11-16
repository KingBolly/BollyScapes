import { useState } from "react";
import Faqs from "../data/faqs"

function FAQ () {

  const  [showFaq, setShowFaq] = useState(null)

  const toggleFaq = (id) => {
    setShowFaq((prevFaq) => (prevFaq === id ? null : id))
  }

  return (
    <section id="faq" className="bg-white dark:bg-[#142338]">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-col max-lg:items-center lg:flex-row lg:justify-between"> 
        <div className="flex gap-2 mb-3">
        <svg xmlns="http://w3.org" viewBox="0 0 28 28" width="70" height="70" >
          <path fill="#084298" d="M17.5 11.5c-4.42 0-8 3.13-8 7 0 3.87 3.58 7 8 7 1.38 0 2.68-.31 3.82-.85L25.5 26l-1.15-3.45c.72-1.15 1.15-2.54 1.15-4.05 0-3.87-3.58-7-8-7z"/>
          <path fill="#ffffff" d="M11 2C5.48 2 1 6.03 1 11c0 2.12.82 4.07 2.18 5.61L1.8 20.8l4.52-1.35C7.73 19.8 9.33 20 11 20c5.52 0 10-4.03 10-9S16.52 2 11 2z"/>
          <path fill="#084298" d="M11 3.2c-4.86 0-8.8 3.49-8.8 7.8 0 1.88.75 3.6 2 4.95L3 19.4l3.82-1.14c1.29.35 2.7.54 4.18.54 4.86 0 8.8-3.49 8.8-7.8S15.86 3.2 11 3.2zm.95 12.1h-1.8v-1.7h1.8v1.7zm1.85-6.05-.8.82c-.64.65-1.05 1.18-1.05 2.53h-1.8v-.45c0-.99.4-1.89 1.05-2.54l1.11-1.13c.33-.32.53-.77.53-1.26 0-.99-.81-1.8-1.8-1.8s-1.8.81-1.8 1.8H7.45c0-1.98 1.61-3.6 3.6-3.6s3.6 1.62 3.6 3.6c0 .79-.32 1.51-.85 2.03z"/>
        </svg>
          <div>
            <h2 className="text-3xl text-[#17324D] dark:text-[#F4F4F0] font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-black dark:text-[#F4F4F0]">Find quick answers to common Questions</p>
          </div>
        </div>
          <div className="space-y-1 max-w-xl">
            {Faqs.map((item) => {
              const isOpen = showFaq === item.id;

              return (
                <div key={item.id} className="py-3 px-2 bg-white dark:bg-[#1b2e49] rounded-md border border-[#17324D]">
                  <button type="button" onClick={() => toggleFaq(item.id)} aria-expanded={isOpen} className="flex justify-between w-full items-center focus:outline-none ">
                    <span className="md:text-lg font-medium text-left text-[#17324D] dark:text-[#F4F4F0]">{item.question}</span>
                    <span className="flex-shrink-0">
                      <svg className={`h-5 w-5 transition-transform duration-300 dark:text-[#F4F4F0] ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2} 
                      >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7" 
                        /> 
                      </svg>
                    </span>
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="leading-relaxed text-lg text-black dark:text-[#F4F4F0]">{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ;
