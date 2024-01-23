import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Component: React.FC = () => {
  return (
    <div key="1" className="flex flex-col h-full  p-6 bg-gray-100 dark:bg-gray-900 mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">Insights</h1>
        <p className="text-gray-600 dark:text-gray-400">Input your queries here to retrieve insightful information.</p>
      </header>
      <div className="flex flex-row items-center mb-4">
        <Input className="w-2/3 mr-2" placeholder="Enter your query here" type="text" />
        <Button className="flex-none" type="submit">
          Send
        </Button>
      </div>
      <div className="flex-grow border p-4 bg-white dark:bg-gray-800 overflow-auto h-96">
        <p className="text-gray-500 dark:text-gray-400">Response will be displayed here...</p>
      </div>
    </div>
  );
};

export default Component;
