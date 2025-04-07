"use client"
import { FormEvent, useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact(){
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const form:any = useRef(null)
        const [loading,set_loading] = useState<boolean>(false)
    
        const send_application = (e: FormEvent) => {
            e.preventDefault()
            set_loading(true)
            emailjs.sendForm("service_wn93t29", "template_vs5fz0u", form.current, {
                publicKey: "CiFS4wo-oTboJPG9W"
            }).then(() => {
                alert("✅ We received your enquiry, expect a call or an email soon!")
                form.current.reset()
            }).catch(() => {
                alert("⚠️ Message not sent, please try again or send us a message on our email support@aurorasystems.co.zw!")
            }).finally(()=>{
                set_loading(false)
            })
        }
    return(
        <div className="container  mb-2">
            <div className="text-center">
                <h1 className="display-1 text-center fw-bold tp">
                    Get In Touch
                </h1>
                <p>Send Us A message and we will get intouch with you asap!</p>

            </div>
            <div className="row">
                <div className="col-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.0015518947166!2d31.272989674000353!3d-17.823728183139753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931c1f5caeec0dd%3A0x120d16ba1ea5900e!2sEasi%20Seeds!5e1!3m2!1sen!2szw!4v1744034774967!5m2!1sen!2szw" className="rounded" width="100%" height="100%"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                <div className="col-sm">
                    <form onSubmit={send_application} ref={form}>
                        <div className="mb-2">
                            <span>Name</span>
                            <input type="text" name="full_name" className="form-control"  required/>
                        </div>
                        <div className="mb-2">
                            <span>Contact Number</span>
                            <input type="text" name="contact_number" className="form-control"  required/>
                        </div>
                        <div className="mb-2">
                            <span>Email</span>
                            <input type="text" name="email" className="form-control"  required/>
                        </div>
                        <div className="mb-2">
                            <span>Message</span>
                            <textarea name="message" className="form-control"  required/>
                        </div>
                        <div className="mb-2">
                            <button className="btn rounded-pill p-btn" type="submit" disabled={loading}>{loading?"Sending":"Send"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

