using System;

namespace HP.HPTRIM.SDK.Samples
{
   public class DatabaseConnectException : Exception
    {
        public DatabaseConnectException(string message) : base(message) { }
    }
}
