import React, { createContext, useEffect, useState } from "react";
import { threadId } from "worker_threads";

interface AcctContextType{
    currentUserId: number,
    currentFamilyId: number,
    currentCommunityId: number,
    currentForumId: number,
    currentThreadId: number,
    updateUserId: (userId:number) => void,
}

export const AcctContext = createContext<AcctContextType | null>(null);

export default function AcctProvider(props:{children:React.ReactNode}){
    const [currentUserId, setUserId] = useState(0)
    const [currentFamilyId, setFamilyId] = useState(0);
    const [currentCommunityId, setCommunityId] = useState(0);
    const [currentForumId, setForumId] = useState(0);
    const [currentThreadId, setThreadId] = useState(0);

    const updateUserId = (userId: number) => {
        setUserId(userId);
    }

    const updateFamilyId = (familyId: number) => {
        setFamilyId(familyId);
    }

    const updateCommunityId = (commId: number) => {
        setCommunityId(commId);
    }

    const updateForumId = (forumId: number) => {
        setForumId(forumId);
    }

    const updateThreadId = (threadId: number) => {
        setThreadId(threadId);
    }

    
    return (
        <AcctContext.Provider value={{currentUserId, 
                                    currentFamilyId, 
                                    currentCommunityId, 
                                    currentForumId, 
                                    currentThreadId,
                                    updateUserId}}>
            {props.children}
        </AcctContext.Provider>
    )
}