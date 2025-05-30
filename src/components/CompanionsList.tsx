import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getSubjectColor } from '@/lib/utils';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CompanionsListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
    return (
        <article className={cn('companion-list', classNames)}>
            <h2 className="text-3l font-bold">{title}</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-2/3 text-lg">Lessons</TableHead>
                        <TableHead className="text-lg">Subjects</TableHead>
                        <TableHead className="flex w-full items-center justify-end text-lg">Duration</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map(({ id, subject, name, topic, duration }, idx) => (
                        <TableRow key={`${id}-${idx}`}>
                            <TableCell>
                                <Link href={`/companions/${id}`}>
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex size-[72px] items-center justify-center rounded-lg max-md:hidden"
                                            style={{ backgroundColor: getSubjectColor(subject) }}
                                        >
                                            <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-2xl font-bold">{name}</p>
                                            <div className="flex w-2/3">
                                                <p className="text-base text-wrap">{topic}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className="subject-badge w-fit max-md:hidden">{subject}</div>
                                <div
                                    className="flex w-fit items-center justify-center rounded-lg p-2 md:hidden"
                                    style={{ backgroundColor: getSubjectColor(subject) }}
                                >
                                    <Image src={`/icons/${subject}.svg`} alt={subject} width={18} height={18} />
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex w-full items-center justify-end gap-2">
                                    <p className="text-2xl">
                                        {duration} <span className="max-md:hidden">mins</span>
                                    </p>
                                    <Image
                                        src={`/icons/clock.svg`}
                                        alt={subject}
                                        width={14}
                                        height={14}
                                        className="md:hidden"
                                    />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </article>
    );
};

export default CompanionsList;
