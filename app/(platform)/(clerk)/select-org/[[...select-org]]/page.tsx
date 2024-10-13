import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationalPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl={"/organization/:id"}
      afterCreateOrganizationUrl={"/organization/:id"}
      appearance={{
        elements: {
          rootBox: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        },
      }}
    ></OrganizationList>
  );
}
