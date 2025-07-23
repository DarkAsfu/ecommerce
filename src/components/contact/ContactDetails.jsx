import Image from "next/image";

const ContactDetails = () => {
    const contactDetails = [
        {
            icon: "/mailbox.svg",
            title: "Email",
            description: "info@example.com"
        },
        {
            icon: "/phone.svg",
            title: "Phone",
            description: "+123 456 7890"
        },
        {
            icon: "/map.svg",
            title: "Address",
            description: "123 Main St, Anytown, USA"
        }
    ]
    return (
        <div
            className="md:py-[130px] py-[50px] md:pl-[307px] pl-[20px]"
            style={{
                background: "linear-gradient(28deg, #F1FAFE 38.91%, #F8DAB0 118.26%)"
            }}
        >
            <h1 className="text-[24px] font-inter font-bold uppercase text-heading">Contact Us</h1>
            <h6 className="text-[20px] font-inter font-normal text-heading mt-[12px]">Our Branch Office -</h6>
            <div className="mt-[60px]">
                <div className="flex flex-col gap-[40px]">
                    {contactDetails.map((item, index) => (
                        <div key={index} className="flex items-center gap-[13.44px]">
                            <Image src={item.icon} alt={item.title} width={33.33} height={30} />
                            <div>
                                <h6 className="text-[18px] font-inter font-medium text-heading">{item.title}</h6>
                                <p className="text-[16px] font-inter font-normal text-secondary">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;