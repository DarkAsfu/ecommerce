import NewsLetter from "@/components/home/NewsLetter";
import ProfileTab from "@/components/profile/ProfileTab";
import SectionBanner from "@/components/reusable/SectionBanner";

const ProfileInfo = () =>{
    return(
        <div>
            <SectionBanner title="Profile Info" />
            <ProfileTab/>
            <NewsLetter/>
        </div>
    )
}

export default ProfileInfo;