import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { useSelector } from 'react-redux';

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job);

    return (
        <div className="bg-gray-50 rounded-lg shadow-sm p-4">
            <Table>
                <TableCaption className="text-gray-500 text-sm mb-4">
                    Your applied jobs
                </TableCaption>
                <TableHeader>
                    <TableRow className="border-b border-gray-200">
                        <TableHead className="text-gray-600 font-medium">Date</TableHead>
                        <TableHead className="text-gray-600 font-medium">Job Role</TableHead>
                        <TableHead className="text-gray-600 font-medium">Company</TableHead>
                        <TableHead className="text-gray-600 font-medium text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allAppliedJobs.length <= 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center text-gray-500 py-6">
                                No jobs applied yet
                            </TableCell>
                        </TableRow>
                    ) : (
                        allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id} className="border-b border-gray-100 hover:bg-gray-100 transition-colors">
                                <TableCell className="text-gray-800">
                                    {appliedJob?.createdAt?.split("T")[0]}
                                </TableCell>
                                <TableCell className="text-gray-800">
                                    {appliedJob.job?.title}
                                </TableCell>
                                <TableCell className="text-gray-800">
                                    {appliedJob.job?.company?.name}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Badge
                                        className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ${
                                            appliedJob?.status === "rejected"
                                                ? 'bg-red-100 text-red-700'
                                                : appliedJob.status === 'pending'
                                                ? 'bg-gray-100 text-gray-700'
                                                : 'bg-emerald-100 text-emerald-700'
                                        }`}
                                    >
                                        {appliedJob.status.toUpperCase()}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobTable;