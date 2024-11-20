import DetailPage from "@/components/DetailPage";

export default function Page({ params }: { params: { id: string } }) {
  return <DetailPage id={params.id} />;
}
