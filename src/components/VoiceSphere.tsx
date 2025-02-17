import { useEffect, useRef } from 'react';

type ConversationStatus = 'idle' | 'connecting' | 'connected' | 'disconnecting' | 'disconnected' | 'error';

interface VoiceSphereProps {
  status: ConversationStatus;
  isSpeaking: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const MicrophoneIcon = () => (
  <path 
    fill="currentColor" 
    d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"
  />
);

const SpeakerIcon = () => (
  <path 
    fill="currentColor" 
    d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
  />
);

export function VoiceSphere({ status, isSpeaking, onClick, disabled }: VoiceSphereProps) {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sphereRef.current) return;
    
    if (status === 'connected') {
      if (isSpeaking) {
        sphereRef.current.classList.add('speaking');
        sphereRef.current.classList.remove('listening');
      } else {
        sphereRef.current.classList.add('listening');
        sphereRef.current.classList.remove('speaking');
      }
    } else {
      sphereRef.current.classList.remove('speaking', 'listening');
    }
  }, [status, isSpeaking]);

  return (
    <div 
      ref={sphereRef}
      onClick={disabled ? undefined : onClick}
      className={`
        w-16 h-16 rounded-full cursor-pointer transition-all duration-300
        flex items-center justify-center relative
        ${disabled ? 'cursor-default opacity-50' : 'hover:scale-105'}
        bg-[#2D31FA]
      `}
    >
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(45, 49, 250, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(45, 49, 250, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(45, 49, 250, 0); }
        }

        @keyframes wave {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        .speaking::before,
        .speaking::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(45, 49, 250, 0.4);
          animation: wave 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .speaking::after {
          animation-delay: 0.5s;
        }

        .listening {
          animation: pulse 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      <svg 
        viewBox="0 0 24 24" 
        className={`w-8 h-8 ${status === 'connected' && isSpeaking ? 'text-white/80' : 'text-white'}`}
      >
        {status === 'connected' && isSpeaking ? <SpeakerIcon /> : <MicrophoneIcon />}
      </svg>
    </div>
  );
}
