export function kebabify(source) {
    return source
        .toLowerCase()
        .trim()
        .replace(/[ _\.]+/g, '-')      
        .replace(/[^a-z0-9-]/g, '')    
        .replace(/^-+|-+$/g, '');
}