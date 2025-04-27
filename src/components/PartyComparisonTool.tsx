import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const initialParties = [
  { id: 1, name: 'Liberal Party', leader: 'Justin Trudeau', platform: 'Progressive' },
  { id: 2, name: 'Conservative Party', leader: 'Pierre Poilievre', platform: 'Conservative' },
  { id: 3, name: 'NDP', leader: 'Jagmeet Singh', platform: 'Social Democratic' },
  { id: 4, name: 'Green Party', leader: 'Elizabeth May', platform: 'Environmentalist' },
];

export default function PartyComparisonTool() {
  const [parties, setParties] = useState(initialParties);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredParties = parties.filter(party =>
    party.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    party.leader.toLowerCase().includes(searchQuery.toLowerCase()) ||
    party.platform.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Compare Canadian Political Parties</h2>
        <p className="text-muted-foreground">
          Explore and compare the platforms, leaders, and ideologies of different political parties in Canada.
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Search parties..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button variant="outline">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
      
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4 pr-4 min-w-full">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Leader</TableHead>
                <TableHead>Platform</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredParties.map(party => (
                <TableRow key={party.id}>
                  <TableCell className="font-medium">{party.name}</TableCell>
                  <TableCell>{party.leader}</TableCell>
                  <TableCell>{party.platform}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
      
      <p className="text-sm text-muted-foreground">
        Data is sourced from Elections Canada and each party's official website.
      </p>
    </div>
  );
}
