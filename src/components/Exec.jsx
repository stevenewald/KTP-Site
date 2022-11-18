import React from 'react';
import '../index.css';
import ExecCard from './ExecCard.jsx'
import { motion } from 'framer-motion'

class Execs extends React.Component {
    render() {
        return (
            <section class="bg-white">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">Our Executive Team</h1>

                    <p class="max-w-2xl mx-auto my-6 text-center text-gray-500">
                        Fill in this text later idk
                    </p>

                    {/* Solo Section for President */}
                    <motion.div class="flex justify-center"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}>
                      <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border sm:w-4/5 md:w-3/6 lg:w-1/4 rounded-xl hover:border-transparent group hover:bg-blue-600">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://media-exp1.licdn.com/dms/image/C4E03AQEhnMuPtE0eGw/profile-displayphoto-shrink_400_400/0/1657907779939?e=1673481600&v=beta&t=zzQDOTfwH6lSA2KyoKvno6OdgWaUXEk_PIgJjUlRSwk" alt=""></img>
                          <h1 class="mt-4 text-xl md:text-2xl font-semibold text-gray-700 truncate group-hover:text-white">Samar Saleem</h1>
                          <p class="mt-2 text-sm md:text-base text-gray-500 truncate group-hover:text-gray-300">Founder And President</p>
                          <div class="flex mt-3 -mx-2">
                            <a href="https://www.instagram.com/samarsaleem/" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="Instagram">
                              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z">
                                </path>
                              </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/samarsaleem/" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="Linkedin">
                              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                              </path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    <div class="grid grid-cols-2 gap-8 mt-8 lg:grid-cols-4">

                        <ExecCard name="Nam Nguyen"
                                  role="VP of Internal Affairs"
                                  imgsrc="https://media-exp1.licdn.com/dms/image/C5603AQEtz1wN1PeAmw/profile-displayphoto-shrink_400_400/0/1624822282607?e=1673481600&v=beta&t=tk5OdILOA4zFcJedNbbwLm0K2U5jJ3MnSn8NzRAk65g"
                                  instagram="https://www.instagram.com/namnguyen0412/"
                                  linkedin="https://www.linkedin.com/in/nhat-nam-nguyen-96454b156/"
                                  delay="0.05"/>
                        <ExecCard name="Sneh Deshpande"
                                  role="VP of External Affairs"
                                  imgsrc="https://media-exp1.licdn.com/dms/image/C4D03AQEVH1jm84ax0A/profile-displayphoto-shrink_400_400/0/1649042616875?e=1673481600&v=beta&t=26U63ZV9nu7PlxeINdXmmqxH2ihM6_CrHkYoFfGhgcw"
                                  instagram="https://www.instagram.com/snehdeshpande/"
                                  linkedin="https://www.linkedin.com/in/snehdeshpande/"
                                  delay="0.1"/>
                        <ExecCard name="Josh Brice"
                                  role="VP of Member Dev."
                                  imgsrc="https://media-exp1.licdn.com/dms/image/C5603AQE7b12wJDGvtg/profile-displayphoto-shrink_100_100/0/1648564209595?e=1673481600&v=beta&t=rvYlEBkQU1835jg3eGD6KDGJhqHRrggAQFU-Ex48b0k"
                                  instagram="https://www.instagram.com/goodeveningmrbrice/"
                                  linkedin="https://www.linkedin.com/in/josh-brice/"
                                  delay="0.15"/>
                        <ExecCard name="Damien Koh"
                                  role="VP of Member Dev."
                                  imgsrc="https://media-exp1.licdn.com/dms/image/C5603AQGjHa8RFpDKhA/profile-displayphoto-shrink_400_400/0/1656946309926?e=1674086400&v=beta&t=5Ppx66YZp7JFL_Yloz0dBRLf3PL2c8_t4bRB9n12MCQ"
                                  instagram="https://www.instagram.com/damiennkoh/"
                                  linkedin="https://www.linkedin.com/in/damien-tze-in-koh/"
                                  delay="0.2"/>
                        <ExecCard name="Steve Ewald"
                                  role="VP of Technology"
                                  imgsrc="https://media-exp1.licdn.com/dms/image/C4D03AQHPxYjOagRJig/profile-displayphoto-shrink_400_400/0/1649132175326?e=1674086400&v=beta&t=nArWnP-Mwa-_Gcr-r-pHuhtl97r7tG5dZzlfCh4D3Pc"
                                  instagram="https://www.instagram.com/stevenewald/"
                                  linkedin="https://www.linkedin.com/in/steven-ewald/"
                                  delay="0.05"/>
                        <ExecCard name="Alexis Robles"
                                  role="VP of Technology"
                                  imgsrc="https://media-exp1.licdn.com/dms/image/C4E03AQHxKbf9gRhDYw/profile-displayphoto-shrink_400_400/0/1660923581630?e=1674086400&v=beta&t=xpu4AmKRflfjxMDXf5lzqPM_bEqCZ1lRiVTlzKjr6Pk"
                                  instagram="https://www.instagram.com/al3xisrobles/"
                                  linkedin="https://www.linkedin.com/in/alexisdrobles/"
                                  delay="0.1"/>
                        <ExecCard name="Eagen Notokusumo"
                                  role="VP of Finance"
                                  imgsrc="https://media-exp1.licdn.com/dms/image/C4D03AQEX-pJelYP9lQ/profile-displayphoto-shrink_400_400/0/1642469910535?e=1674086400&v=beta&t=6XmbJ70G__jLFuk9d_-55PM-8MiwshNsGCbSgGccoKU"
                                  instagram="https://www.instagram.com/r.eagan5/"
                                  linkedin="https://www.linkedin.com/in/eagan-notokusumo/"
                                  delay="0.15"/>
                        <ExecCard name="Julie Park"
                                  role="VP of Marketing"
                                  imgsrc="https://media-exp1.licdn.com/dms/image/D5603AQEBI1G8tDtQFQ/profile-displayphoto-shrink_400_400/0/1665165121633?e=1674086400&v=beta&t=ACMPKcTtGa10DFyCTdIR7u9W2XGX4vCxZNO6fq8gvwo"
                                  instagram="https://www.instagram.com/julieeppark/"
                                  linkedin="https://www.linkedin.com/in/julieeppark/"
                                  delay="0.2"/>

                    </div>
                </div>
            </section>
        )
    }
}
export default Execs;
