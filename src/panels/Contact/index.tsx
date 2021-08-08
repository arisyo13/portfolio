import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Input from '../../components/Input';
import { Container, Main } from '../../components/Styled';

const Contact = () => {
    const [text, setText] = useState("");
    const [t, setT] = useState("");

    function sendEmail(e: any) {
        e.preventDefault();
        emailjs.sendForm('default_service', 'template_v4pifim', e.target, 'user_0Gza1CBGA9taIfto1pEG8')
          .then((result) => {
              setT("Your message has been sent!");
              e.target.reset();
          }, (error) => {
            setT("Your message couldn't been sent. Error: " + error.text);
        });
    }
    
    return (
        <Main id="contact">
            <p className="hidden" >{text}</p>
            <Container>
                <form onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                    <Input name={"from_name"} placeholder={"Name"} textUpdate={setText} />
                    <input type="hidden" name={"to_name"} id="to_name" value="Aris"></input>
                    <Input name={"reply_to"} placeholder={"Email"} textUpdate={setText} />
                    <Input name={"message"} placeholder={"Your message"} textUpdate={setText} />
                    <input className="flex w-16 bg-red-400 rounded-md p-1 text-white justify-center" type="submit" value="Send" />
                    <h1>{t}</h1>
                </form>
            </Container>
        </Main>
    )
}

export default Contact