import React, { Fragment } from 'react'

const Contact = (props) => {
    let content = {
        English: {
            title: "Contact Us",
            address: "Lorem ipsum, Lorem ipsum, Lorem, 123456",
            phone: {
                label: "Phone",
                value: "+12 34567"
            },
            email: {
                label: "Email",
                value: "abc@example.com"
            }
        },
        Arabic: {
            title: "اتصل بنا",
            address: "شارع الفرامل",
            phone: {
                label: "هاتف",
                value: "+12 34567"
            },
            email: {
                label: "بريد الالكتروني",
                value: "abc@example.com"
            }
        }
    }
    props.language === "Arabic" ? (content = content.Arabic) : (content = content.English)

    return (
        <Fragment>
            <h2>{content.title}</h2>
            <hr />
            <address>{content.address}</address>
            <address>
                <abbr title="Phone">{content.phone.label}: </abbr>
                {content.phone.value}
                <br />
                <abbr title="Email">{content.email.label}: </abbr>
                <a href={`mailto:${content.email.value}`}>{content.email.value}</a>
            </address>
        </Fragment>
    )
}

export default Contact
