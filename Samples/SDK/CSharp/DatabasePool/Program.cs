using System;
using System.Diagnostics;
using TRIM.SDK;

namespace HP.HPTRIM.SDK.Samples
{
    class Program
    {
        static void Main(string[] args)
        {
            TrimApplication.Initialize();

            Stopwatch watch = new Stopwatch();
            watch.Start();

            DatabasePoolEntry poolEntry = DatabasePool.Instance.AcquirePoolEntry("J1", "itu_tadmin");

            Console.WriteLine(poolEntry.TrimDatabase.CurrentUser.SortName);

            DatabasePool.Instance.ReleasePoolEntry(poolEntry.Id);

            watch.Stop();

            Console.WriteLine(watch.ElapsedMilliseconds);


            watch.Restart();

            poolEntry = DatabasePool.Instance.AcquirePoolEntry("J1", "itu_tadmin");


            Console.WriteLine(poolEntry.TrimDatabase.CurrentUser.SortName);

            DatabasePool.Instance.ReleasePoolEntry(poolEntry.Id);

            watch.Stop();

            Console.WriteLine(watch.ElapsedMilliseconds);

            DatabasePool.Instance.Dispose();
        }
    }
}
