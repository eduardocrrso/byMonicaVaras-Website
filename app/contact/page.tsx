import Link from "next/link";

export default function Page() {
    return (
        <div className="max-w-xl mx-auto">

            <p className="mb-8 text-center">{"Please let me know about your plans and I'll get back to you shortly."}</p>

            <form
                action="/contacto/gracias/"
                method="POST"
                name="contact"
                netlify-honeypot="bot-field"
            // netlify
            >
                <ul className="grid gap-4">
                    <div className="flex gap-4">
                        <li className="flex-1">
                            <label htmlFor="fiancesFirstName">{"Fiance's First Name"}<span className="required">*</span></label>
                            <input type="text" id="fiancesFirstName" name="fiancesFirstName" required className="w-full" />
                        </li>
                        <li className="flex-1">
                            <label htmlFor="fiancesLastName">{"Fiance's Last Name"}</label>
                            <input type="text" id="fiancesLastName" name="fiancesLastName" className="w-full" />
                        </li>
                    </div>

                    <div className="flex gap-4">
                        <li className="flex-1">
                            <label htmlFor="fianceesFirstName">{"Fiancee's First Name"}<span className="required">*</span></label>
                            <input type="text" id="fianceesFirstName" name="fianceesFirstName" required className="w-full" />
                        </li>

                        <li className="flex-1">
                            <label htmlFor="fianceesLastName">{"Fiancee's Last Name"}</label>
                            <input type="text" id="fianceesLastName" name="fianceesLastName" className="w-full" />
                        </li>
                    </div>

                    <li>
                        <label htmlFor="email">{"Contact Email"}<span className="required">*</span></label>
                        <input type="text" id="email" name="email" required className="w-full" />
                    </li>

                    <li>
                        <label htmlFor="eventLocation">{"Event Location"}<span className="required">*</span></label>
                        <input type="text" id="eventLocation" name="eventLocation" className="w-full" />
                    </li>

                    <li>
                        <label htmlFor="countryOfResidence">{"Country of Residence"}<span className="required">*</span></label>
                        <input type="text" id="countryOfResidence" name="countryOfResidence" className="w-full" />
                    </li>
                    <div className="flex justify-between flex-wrap gap-4">
                        <li>
                            <p>{"What's your budget?"}</p>

                            <div>
                                <div>
                                    <input type="radio" id="1k-2k" name="budget" value="1,000 to 1,999 USD" className="mr-2 -mt-1" />
                                    <label htmlFor="1k-2k">{"1,000 to 1,999 USD"}</label >
                                </div>
                                <div>
                                    <input type="radio" id="2k-4k" name="budget" value="2,000 to 3,999 USD" className="mr-2 -mt-1" />
                                    <label htmlFor="2k-4k">{"2,000 to 3,999 USD"}</label>
                                </div>
                                <div>
                                    <input type="radio" id="4k-6k" name="budget" value="4,000 to 5,999 USD" className="mr-2 -mt-1" />
                                    <label htmlFor="4k-6k">{"4,000 to 5,999 USD"}</label>
                                </div>
                                <div>
                                    <input type="radio" id="6k+" name="budget" value="6,000+ USD" className="mr-2 -mt-1" />
                                    <label htmlFor="6k+">{"6,000+ USD"}</label>
                                </div>
                            </div>
                        </li>

                        <ul>
                            <li>
                                <p>{"How did you hear about me?"}</p>
                            </li>
                            <li>
                                <input type="checkbox" id="referenceVogue" name="referenceVogue" className="mr-2 -mt-1" />
                                <label htmlFor="referenceVogue">{"Vogue"}</label>
                            </li>
                            <li>
                                <input type="checkbox" id="referenceInstagram" name="referenceInstagram" className="mr-2 -mt-1" />
                                <label htmlFor="referenceInstagram">{"Instagram"}</label>
                            </li>
                            <li>
                                <input type="checkbox" id="referenceRecommendation" name="referenceRecommendation" className="mr-2 -mt-1" />
                                <label htmlFor="referenceRecommendation">{"Recommendation"}</label>
                            </li>
                            <li>
                                <input type="checkbox" id="referenceGoogle" name="referenceGoogle" className="mr-2 -mt-1" />
                                <label htmlFor="referenceGoogle">{"Google"}</label>
                            </li>
                            <li className="flex mt-4 ml-6">
                                <label htmlFor="referenceOther" className="mt-[7px]">{"Other"}</label>
                                <input type="text" id="referenceOther" name="referenceOther" className="w-[9rem]" />
                            </li>
                        </ul>
                    </div>
                    <li className="hidden">
                        <label htmlFor="">{"If you're human, keep this blank"}</label>
                        <input name="bot-field" />
                    </li>
                </ul>

                <ul>
                    <li className="mt-12">
                        <label htmlFor="message" aria-required="true" className="mt-12">{"Tell me more about your plans"}</label>
                        <textarea name="message" id="message" cols={30} rows={4} className="min-w-full h-24 focus:mt-0"></textarea>
                    </li>

                    <li className="flex justify-center my-6">
                        <button type="submit" className="underline font-bold">{"Submit>>"}</button>
                    </li>
                </ul>
            </form>

            {<p className="mt-12">{"I'll get back to you soon. Meanwhile you can look at some "} <Link href={"/"} className="underline">{"other photoshoots"}</Link> {"for some inspiration."}</p>}
            <p className="text-right">{"- With love Monica"}</p>
        </div>
    );
}