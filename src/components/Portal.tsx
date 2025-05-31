'use client'
import {createPortal} from "react-dom";
import React, {useEffect, useState, ReactNode} from 'react';

interface PortalProps {
    children: ReactNode;
}

export default function Portal({ children }: PortalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    const portalRoot = document.getElementById('portal-root');
    return portalRoot ? createPortal(children, portalRoot) : null;
}