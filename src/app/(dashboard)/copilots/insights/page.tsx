"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getInsights } from "@/services/data-fetch";
import Markdown from "react-markdown";
import remarkgfm from "remark-gfm";
import { Typewriter } from "react-simple-typewriter";

import "@/app/globals.css";

const Component: React.FC = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>();
  const [displayedText, setDisplayedText] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const url = new URL(
      "/api/v1/copilot/insights",
      process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL
    );
    url.search = `query=${query}`;

    try {
      const data = await getInsights(url.toString());
      setResponse(data);
    } catch (error) {
      setError(error as Error);
    }
    setLoading(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    setResponse("");
    setDisplayedText(""); 
  }, []);

  useEffect(() => {
    setDisplayedText("");
    if (response) {
      let index = 0;
      setDisplayedText((prev) => prev + response[index]);

      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + response[index]);
        index++;
        if (index === response.length - 1) {
          clearInterval(interval);
        }
      }, 10); 

      return () => {
        clearInterval(interval);
      };
    }
  }, [response]);

  return (
    <div key="1" className="flex flex-col h-full p-6 dark:bg-gray-900 mx-auto">
      <form onSubmit={handleSubmit}>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Copilot Chat
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Input your queries here to retrieve insights. <br></br> <br></br>
            Note: UpEase Copilot can make mistakes. Verify important information.
          </p>
        </header>
        <div className="flex flex-row items-center mb-4">
          <Input
            name="query"
            className="w-2/3 mr-2"
            placeholder="Enter your query here"
            type="text"
            onChange={handleInputChange}
          />
          <Button className="flex-none" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Send"}
          </Button>
        </div>
        <div className="flex-grow border p-4 bg-white dark:bg-gray-800 overflow-auto min-h-screen flex flex-col items-center">
        {loading ? (
          <p className="text-gray-500 dark:text-gray-400 text-2xl">
            Loading
            <Typewriter words={["..."]} loop />{" "}
          </p>
        ) : displayedText ? (
          <div className="w-full flex justify-center items-center">
            <Markdown className="prose markdown" remarkPlugins={[remarkgfm]}>
              {displayedText}
            </Markdown>
          </div>
        ) : error ? (
          <p className="text-gray-500 dark:text-gray-400">{response}</p>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Insights will be displayed here...
          </p>
        )}
      </div>
      </form>
    </div>
  );
};

export default Component;
