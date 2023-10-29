"use client";

import React from "react";
import { Button, Text } from "@radix-ui/themes";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Successfully toasted!");

const TestingCompoment = () => {
  return (
    <>
      <Button onClick={notify}>Make me a toast</Button>
      <Toaster />
      <Text>Heelo</Text>
    </>
  );
};

export default TestingCompoment;
