export default function AnchorDetail({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Anchor: {params.id}</h1>
      <p>Detail page under development...</p>
    </div>
  );
}
