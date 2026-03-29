import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            ...(item.href ? { "item": `https://elretono.org${item.href}` } : {}),
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav aria-label="Breadcrumb" className="w-full bg-[#f2f3e7] py-3 px-4 md:px-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                            {item.href ? (
                                <Link href={item.href} className="hover:text-[#4f5d32] transition-colors duration-200">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-[#4f5d32] font-medium" aria-current="page">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
