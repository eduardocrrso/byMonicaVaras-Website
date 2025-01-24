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
                            <input
                                type="text"
                                id="fiancesFirstName"
                                name="fiancesFirstName"
                                required
                                className="peer"
                                placeholder=""
                            />
                            <label htmlFor="fiancesFirstName" className="floating">{"Fiance's First Name"}<span className="required">*</span>
                            </label>
                        </li>
                        <li className="flex-1">
                            <input
                                type="text"
                                id="fiancesLastName"
                                name="fiancesLastName"
                                className="peer"
                                placeholder=""
                            />
                            <label htmlFor="fiancesLastName" className="floating">{"Fiance's Last Name"}</label>
                        </li>
                    </div>

                    <div className="flex gap-4">
                        <li className="flex-1">
                            <input
                                type="text"
                                id="fianceesFirstName"
                                name="fianceesFirstName"
                                required
                                className="peer"
                                placeholder=""
                            />
                            <label htmlFor="fianceesFirstName" className="floating">{"Fiancee's First Name"}<span className="required">*</span></label>
                        </li>

                        <li className="flex-1">
                            <input
                                type="text"
                                id="fianceesLastName"
                                name="fianceesLastName"
                                className="peer"
                                placeholder=""
                            />
                            <label htmlFor="fianceesLastName" className="floating">{"Fiancee's Last Name"}</label>
                        </li>
                    </div>

                    <li>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            required
                            className="peer"
                            placeholder=""
                        />
                        <label htmlFor="email" className="floating">{"Contact Email"}<span className="required">*</span></label>
                    </li>

                    <li>
                        <input
                            type="text"
                            id="eventLocation"
                            name="eventLocation"
                            className="peer"
                            placeholder=""
                        />
                        <label htmlFor="eventLocation" className="floating">{"Event Location"}<span className="required">*</span></label>
                    </li>

                    <li>
                        <input
                            type="text"
                            id="countryOfResidence"
                            name="countryOfResidence"
                            className="peer"
                            placeholder=""
                        />
                        <label htmlFor="countryOfResidence" className="floating">{"Country of Residence"}<span className="required">*</span></label>
                    </li>
                    <li>
                        <input
                            type="text"
                            id="budget"
                            name="budget"
                            className="peer"
                            placeholder=""
                        />
                        <label htmlFor="budget" className="floating">{"What's your budget?"}</label>
                    </li>

                    <ul className="groupCheckbox">
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
                            <input type="checkbox" id="referenceGoogle" name="referenceGoogle" className="mr-2 -mt-1" />
                            <label htmlFor="referenceGoogle">{"Google"}</label>
                        </li>
                        <li>
                            <input type="checkbox" id="referenceRecommendation" name="referenceRecommendation" className="mr-2 -mt-1" />
                            <label htmlFor="referenceRecommendation">{"Recommendation"}</label>
                        </li>
                        <li className="flex mt-6">
                            <input type="text" id="referenceOther" name="referenceOther" className="max-w-[13rem] peer mt-2" placeholder="" />
                            <label htmlFor="referenceOther" className="floating mt-2">{"Other"}</label>
                        </li>
                    </ul>
                    <li className="hidden">
                        <label htmlFor="">{"If you're human, keep this blank"}</label>
                        <input name="bot-field" />
                    </li>
                </ul>

                <ul>
                    <li className="mt-16">
                        <textarea name="message" id="message" cols={30} rows={4} className="min-w-full h-24 border-t-[1px] peer focus:border-t-[2px]" placeholder=""></textarea>
                        <label htmlFor="message" aria-required="true" className="absolute left-0 -top-4 text-sm
                                                                                peer-placeholder-shown:text-base
                                                                                peer-placeholder-shown:text-gray
                                                                                peer-placeholder-shown:top-2
                                                                                peer-focus:-top-6
                                                                                peer-focus:text-sm
                                                                                peer-focus:text-foreground
                                                                                transition-all"
                        >
                            {"Tell me more about your plans"}
                        </label>
                    </li>

                    <li className="flex justify-center my-6">
                        <button type="submit" className="underline font-bold text-xl">{"Submit>>"}</button>
                    </li>
                </ul>
            </form>

            {<p className="mt-12">{"I'll get back to you soon. Meanwhile you can look at some "} <Link href={"/"} className="underline">{"other photoshoots"}</Link> {"for some inspiration."}</p>}
            <p className="text-right">{"- With love Monica"}</p>
        </div>
    );
}