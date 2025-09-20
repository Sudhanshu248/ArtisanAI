import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            <header  className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex-1 max-w-md">
                        <div className="relative">
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleLogout}
                            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition cursor-pointer"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}