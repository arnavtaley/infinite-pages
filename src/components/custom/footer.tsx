import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}

export function Footer({}: FooterProps) {
  return (
    <Card className="rounded-none border-none bg-sidebar/40">
      <CardHeader>
        <CardTitle className="text-center font-light">
          Developed by <strong className="hover:underline">@arnavtaley</strong>,{" "}
          <strong className="hover:underline">@anujkuralkar</strong> on Github.
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
