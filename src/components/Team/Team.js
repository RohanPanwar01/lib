import react from "react";
import Saa from '../../image/saa.jpg';
import Placeholder from '../../image/placeholder.jpg';


function Team() {
    return (
       <> 
         <section className="bg-gray-100 py-16">
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20">
                <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-1">
                    {/* <a href="#" className="block rounded-lg p-4 shadow-xs shadow-indigo-100"> */}
                        <img
                            alt=""
                            src={Placeholder}
                            className="h-56 w-auto rounded-md object-cover"
                        />

                        <div className="mt-2">
                            <dl>

                                <div>
                                    <div style={{display:'flex', gap:'8px'}}>
                                     <svg
                                        className="size-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>
                                    <dd className="font-medium">Librarian (Head Librarian / Chief Librarian)</dd>
                                    </div>
                                    <dd className="font-800">Anup Singh Panwar</dd>
                                    <dd className="font-medium">Responsibilities:</dd>

                                    <ul className="list-disc pl-5 font-300">
                                        <li>Oversee the entire library operations.</li>
                                        <li>Manage library budget and resources.</li>
                                        <li>Develop library policies and strategic plans.</li>
                                    </ul>

                                </div>
                            </dl>

                            <div className="mt-6 flex items-center gap-8 text-xs">
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    <svg
                                        className="size-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.6a1 1 0 01.98.804l1.2 6A1 1 0 0110 11h-.6l-.5 2.5a16 16 0 006.6 6.6l2.5-.5v-.6a1 1 0 011.196-.98l6 1.2a1 1 0 01.804.98V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
                                        />
                                    </svg>


                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Call</p>

                                        <p className="font-medium">957579074</p>
                                    </div>
                                </div>

                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    <svg
                                        className="size-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>

                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Experience</p>

                                        <p className="font-medium">2 Years</p>
                                    </div>
                                </div>

                                {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bedroom</p>

          <p className="font-medium">4 rooms</p>
        </div>
      </div> */}
                            </div>
                        </div>
                    {/* </a> */}
                </div>


              <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-1">
                    {/* <a href="#" className="block rounded-lg p-4 shadow-xs shadow-indigo-100"> */}
                        <img
                            alt=""
                            src={Placeholder}
                            className="h-56 w-auto rounded-md object-cover"
                        />

                        <div className="mt-2">
                            <dl>

                                <div>
                                     <div style={{display:'flex', gap:'8px'}}>
                                     <svg
                                        className="size-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>
                                    <dd className="font-medium">Assistant Librarians</dd>
                                    </div>
                                    <dd className="font-800">Sandhya Panwar</dd>
                                    <dd className="font-medium">Responsibilities:</dd>

                                    <ul className="list-disc pl-5 font-300">
                                        <li>Support the head librarian in daily activities.</li>
                                        <li>Assist users in locating and using resources.</li>
                                        <li>Handle circulation desk, issue/return of books.</li>
                                    </ul>

                                </div>
                            </dl>

                            <div className="mt-6 flex items-center gap-8 text-xs">
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    <svg
                                        className="size-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.6a1 1 0 01.98.804l1.2 6A1 1 0 0110 11h-.6l-.5 2.5a16 16 0 006.6 6.6l2.5-.5v-.6a1 1 0 011.196-.98l6 1.2a1 1 0 01.804.98V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
                                        />
                                    </svg>


                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Call</p>

                                        <p className="font-medium">9993938894</p>
                                    </div>
                                </div>

                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    <svg
                                        className="size-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>

                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Experience</p>

                                        <p className="font-medium">2 Years</p>
                                    </div>
                                </div>

                                {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bedroom</p>

          <p className="font-medium">4 rooms</p>
        </div>
      </div> */}
                            </div>
                        </div>
                    {/* </a> */}
                </div>
            </div>
            </section>
        </>
    )
}
export default Team;