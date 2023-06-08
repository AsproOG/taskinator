import { Button } from "@chakra-ui/react";

function StudentButton() {
  return <Button>Student</Button>;
}

function CompanyButton() {
  return <Button>Company</Button>;
}

export default function SignIn() {
  return (
    <div>
      <h1>Welcome to the Sign in page! Are you a Student or part of a Company?</h1>
      <StudentButton />
      <CompanyButton />
    </div>
  );
}
