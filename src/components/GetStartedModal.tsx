import React, { useState } from 'react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
  onSwitchToLogin
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl border border-[#E0E3EB] max-w-md w-full p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0049db] text-[24px]">
              monitoring
            </span>
            <h3 className="font-headline font-bold text-lg text-[#181c21]">
              Get Started with ChartFlow
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#737687] hover:text-[#181c21] p-1 rounded-lg"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="text-xs text-[#737687] mb-4">
          Join thousands of traders using precision market analytics, real-time alerts, and advanced chart screeners.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-[#434656] block mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              placeholder="Alex Morgan"
              className="w-full bg-[#f1f4fb] border border-[#E0E3EB] rounded-lg px-3 py-2 text-sm text-[#181c21] focus:outline-none focus:border-[#0049db]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#434656] block mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="alex@example.com"
              className="w-full bg-[#f1f4fb] border border-[#E0E3EB] rounded-lg px-3 py-2 text-sm text-[#181c21] focus:outline-none focus:border-[#0049db]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0049db] hover:bg-[#2962ff] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors shadow-xs"
          >
            Create Free Account
          </button>

          {isSubmitted && (
            <div className="p-2.5 bg-[#089981]/15 text-[#089981] text-xs font-semibold rounded-lg text-center">
              ✓ Account created! Welcome to ChartFlow.
            </div>
          )}
        </form>

        <div className="mt-4 pt-4 border-t border-[#E0E3EB] text-center text-xs text-[#737687]">
          Already registered?{' '}
          <button
            onClick={() => {
              onClose();
              onSwitchToLogin();
            }}
            className="text-[#0049db] font-semibold hover:underline"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
