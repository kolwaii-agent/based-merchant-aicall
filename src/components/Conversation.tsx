'use client';

import { useConversation } from '@11labs/react';
import { useCallback, useEffect } from 'react';
import { VoiceSphere } from './VoiceSphere';

const AGENT_ID = process.env.NEXT_PUBLIC_AGENT_ID || '78BKhTUaJdL1af3NHjBD';

type ConversationStatus = 'idle' | 'connecting' | 'connected' | 'disconnecting' | 'disconnected' | 'error';

export function Conversation() {
  const conversation = useConversation({
    onConnect: () => {
      // Connection successful
    },
    onDisconnect: () => {
      // Clean disconnection
    },
    onMessage: (message: unknown) => {
      // Handle message if needed
    },
    onError: (error: Error) => {
      // Log error to error reporting service in production
      if (process.env.NODE_ENV === 'development') {
        console.error('Conversation error:', error);
      }
    },
  });

  useEffect(() => {
    // Cleanup on unmount
    return () => {

    };
  }, [conversation]);

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: AGENT_ID
      });

      return stream;
    } catch (error) {
      if (error instanceof Error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to start conversation:', error.message);
        }
        // Handle specific error cases
        if (error.name === 'NotAllowedError') {
          alert('Microphone permission is required for the conversation.');
        } else if (error.name === 'NotFoundError') {
          alert('No microphone found. Please ensure you have a working microphone.');
        }
      }
      throw error;
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const handleSphereClick = useCallback(async () => {
    if (conversation.status === 'connected') {
      await stopConversation();
    } else {
      await startConversation();
    }
  }, [conversation.status, startConversation, stopConversation]);

  return (
    <div className="flex flex-col items-center gap-6">
      <VoiceSphere
        status={conversation.status}
        isSpeaking={conversation.isSpeaking}
        onClick={handleSphereClick}
      />
      <p className="text-gray-600 text-sm">
        {conversation.status === 'connected' 
          ? conversation.isSpeaking 
            ? 'BASED AI Agent is assisting about onboarding USDC.' 
            : 'Listening to your questions about USDC...'
          : 'Click the microphone to start a merchant consultation'}
      </p>
    </div>
  );
}
