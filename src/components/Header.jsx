import React from 'react'

const Header = (props) => {
    let content = {
        English: {
            title: "Lorem",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        Arabic: {
            title: "لوريم",
            description:
                "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان هو النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر الميلادي ، عندما أخذت طابعة غير معروفة لوحًا من النوع وتدافعت عليه لصنع كتاب عينة من النوع."
        }
    };

    props.language === "Arabic" ? (content = content.Arabic) : (content = content.English)
    return (
        <header class="bg-primary py-5 mb-5">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-lg-12">
                        <h1 class="display-4 text-white mt-5 mb-2">{content.title}</h1>
                        <p class="lead mb-5 text-white-50">{content.description}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
