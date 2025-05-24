'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { subjects } from '@/constants';

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery === 'all') {
            const newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['subject'],
            });

            router.push(newUrl, { scroll: false });
        } else {
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'subject',
                value: searchQuery,
            });
            router.push(newUrl, { scroll: false });
        }
    }, [searchQuery, router, searchParams]);

    return (
        <div>
            <Select onValueChange={setSearchQuery} value={searchQuery}>
                <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All subjects</SelectItem>
                    {subjects?.map(subject => (
                        <SelectItem value={subject} key={subject} className="capitalize">
                            {subject}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default SubjectFilter;
