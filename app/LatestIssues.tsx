import prisma from "@/prisma/client";
import React from "react";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusBadge from "./components/IssueStatusBadge";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  return (
    <Card>
      <Heading size="4" mb="5">
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" align="start" gap="2">
                    <Link href={`/issues/${issue.id}`}> {issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  <Avatar
                    src="https://lh3.googleusercontent.com/a/ACg8ocIpMcvlx61j259bKC9lsMXw1pyLEPDqUJClZZZWZ-Wc=s96-c"
                    fallback="?"
                    size="2"
                    radius="full"
                  />
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
