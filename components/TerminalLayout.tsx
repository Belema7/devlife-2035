import React from 'react';

interface TerminalLayoutProps {
    children: React.ReactNode;
}

const TerminalLayout: React.FC<TerminalLayoutProps> = ({ children }) => {
    return (
        <main className="terminal-container min-h-screen text-primary overflow-hidden selection:bg-primary selection:text-black">
            <div className="scanline" />
            <div className="crt-effect" />

            {/* Vignette effect */}
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_100%),linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-40" />

            <div className="relative z-10 max-w-4xl mx-auto py-8 px-4 font-mono leading-relaxed">
                <header className="mb-12 border-b border-primary/30 pb-4">
                    <div className="text-xl font-bold glitch-text">DEV_LIFE_2035 // SYSTEM_DIAGNOSTIC</div>
                    <div className="text-xs opacity-50 mt-1">STATUS: ONLINE | TERMINAL: /dev/tty0 | AUTH: GUEST</div>
                </header>

                {children}

                <footer className="mt-20 border-t border-primary/30 pt-4 text-xs opacity-30">
                    <div>© 2035 ANTIGRAVITY SYSTEMS. ALL RIGHTS RESERVED.</div>
                    <div>USE OF THIS TERMINAL CONSTITUTES ACCEPTANCE OF THE NEURAL-DATA-HARVESTING AGREEMENT.</div>
                </footer>
            </div>
        </main>
    );
};

export default TerminalLayout;
