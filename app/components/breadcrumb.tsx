import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className='flex items-center space-x-2 text-sm text-gray-600 mb-6'
      aria-label='Breadcrumb'
    >
      {items.map((item, index) => (
        <div key={index} className='flex items-center'>
          {index > 0 && <span className='mx-2 text-gray-400'>›</span>}
          {item.href ? (
            <Link
              href={item.href}
              className='hover:text-emerald-600 transition-colors duration-200'
            >
              {item.label}
            </Link>
          ) : (
            <span className='text-gray-900 font-medium'>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
