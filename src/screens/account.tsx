import Profile from '../assets/profile.png';
import CameraAlt from '@mui/icons-material/CameraAlt';

function AccountScreen() {
    return (
        <div className="flex flex-col bg-gray-50 min-h-screen overflow-hidden">
            <header className="bg-white shadow-md shadow-[#eeeeee] p-4 mb-7 pt-6">
                <h2 className="text-[18px] text-left text-[#1D2226]">Account Settings</h2>
            </header>
            <div className="px-5">
                <div className="flex mb-6 gap-5">
                    <div className="relative">
                        <img
                            src={Profile}
                            alt="Profile picture"
                            className="w-[75px] h-[75px] rounded-full object-cover"
                        />
                        <div
                            className="absolute p-2 scale-[.50] -bottom-1 -right-[15px] bg-[var(--primary-color)] rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        >
                            <CameraAlt className="text-white h-[2px] w-[2px]" />
                        </div>
                    </div>
                    <div className="text-left">
                        <p className="text-[15px] font-semibold text-[#1D2226] mb-[2px]">Marry Doe</p>
                        <p className="text-sm text-[#1D2226] font-light">Marry@Gmail.Com</p>
                    </div>
                </div>
                <p className="text-[#1D2226] text-[13px] capitalize leading-relaxed text-left mb-5 max-w-lg">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, Sed Diam
                </p>
            </div>
            <div className="w-full border-b-2 border-dashed border-gray-300" />
        </div>
    );
}

export default AccountScreen;