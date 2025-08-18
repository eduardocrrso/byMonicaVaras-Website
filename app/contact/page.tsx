import Link from "next/link";
import {Picture} from "@/app/components/picture";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: `Reach out to discuss your wedding photography needs! Whether you have questions or want to book a consultation, I'm here to help. Contact me today to create unforgettable memories through beautiful, personalized wedding photography.`
}

export default function Page() {
    return (
        <>
            <p className="mb-4 text-center">{"Please let me know about your plans and I'll get back to you shortly."}</p>
            <div className="mx-auto mb-8 px-0 max-w-2xl">
                <Picture
                    src={"/photos/contact-photo.jpg"}
                    height={251.55}
                    width={672}
                    aspectRatio={2}
                />
            </div>
            <div className="max-w-xl mx-auto">
                <form action="https://formbold.com/s/98py1" method="POST">
                    <input type="hidden" name="form-name" value="contact" />
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
                                required
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
                                required
                            />
                            <label htmlFor="countryOfResidence" className="floating">{"Country of Residence"}<span className="required">*</span></label>
                        </li>
                        <li>
                            <input
                                type="text"
                                id="weddingPlanner"
                                name="weddingPlanner"
                                className="peer"
                                placeholder=""
                                required
                            />
                            <label htmlFor="weddingPlanner" className="floating">{"Who's your wedding planner?"}<span className="required">*</span></label>
                        </li>
                        <li>
                            <input
                                type="text"
                                id="budget"
                                name="budget"
                                className="peer"
                                placeholder=""
                                required
                            />
                            <label htmlFor="budget" className="floating">{"What's your budget?"}<span className="required">*</span></label>
                        </li>

                        <li>
                            <input
                                type="text"
                                id="igUsername"
                                name="igUsername"
                                className="peer"
                                placeholder=""
                                required
                            />
                            <label htmlFor="igUsername" className="floating">{"Instagram Username"}<span className="required">*</span></label>
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
                            <label htmlFor="message" className="absolute left-0 -top-4 text-sm
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

                        <div className="g-recaptcha" data-sitekey="6Lclos8qAAAAABTljI9On0xLb2Y-9Da_h3fpH4B3"></div>

                        <li className="flex justify-center my-6">
                            <button type="submit" className="underline font-bold text-xl">{"Submit>>"}</button>
                        </li>
                    </ul>
                </form>

                {<p className="mt-12">{"I'll get back to you soon. Meanwhile you can look at some "} <Link href={"/"} className="underline">{"other photoshoots"}</Link> {"for some inspiration."}</p>}
                <p className="text-right">{"- With love Monica"}</p>
            </div>
        </>
    );
}