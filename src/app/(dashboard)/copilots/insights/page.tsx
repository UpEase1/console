"use client";
//import axios from "axios";
import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  text: string;
  isBot: boolean;
}

//check bottom of page for example function, remove this comment when you add the function.
const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", isBot: true },
  ]); 
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // Don't send empty messages
    setMessages([
      ...messages,
      { text: inputValue, isBot: false },
      { text: "Thank you for chatting!", isBot: true }, //change this when you add the callOpenAI function
    ]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col border-8 h-fit ">
      <div className="p-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Customer Support Chat
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Connect with our support team and get immediate assistance for your
          queries.
        </p>
        <hr className="my-4 border-gray-300 dark:border-gray-700" />
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-4 max-h-96">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-end justify-${
              message.isBot ? "start" : "end"
            }`}
          >
            <div className="max-w-xs py-2 px-3 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-gray-200 dark:bg-gray-800">
              <p className="text-sm text-gray-900 dark:text-gray-100">
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <form
        className="border-t h-20 flex items-center space-x-2 px-4 "
        onSubmit={handleSendMessage}
      >
        <Input
          className="flex-1"
          placeholder="Type your message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default Chatbot;




//Use this example funciton and add your key.
/*import axios from "axios";

const callOpenAI = async (input: string) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: input,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return "An error occurred while processing your request.";
  }
};
*/


//modify the handleSendMesage function to call the callOpenAI function and remove the hardcoded bot message.
/*const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // Don't send empty messages

    // Get the bot's response
    const botResponse = await callOpenAI(inputValue);

    // Update messages with the user's message and the bot's response
    setMessages([
      ...messages,
      { text: inputValue, isBot: false },
      { text: botResponse, isBot: true },
    ]);

    // Clear the input field
    setInputValue("");
  };
*/

