export default function Home() {
  return (
    <>
      <div className='flex flex-1 flex-col items-center justify-center p-8'>
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold'>Welcome to Your App</h1>
          <p className='text-muted-foreground text-lg'>
            This is the homepage. The sidebar is now available on all pages!
          </p>
        </div>
      </div>
    </>
  );
}
