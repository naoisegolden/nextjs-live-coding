export default function Page({ params }: { params: { id: number } }) {
    return <p>Invoice ID #{params.id}</p>;
}