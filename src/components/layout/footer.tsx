export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bellevue Cloud Connect. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
