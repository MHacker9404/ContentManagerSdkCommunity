using System.Text;

namespace HP.HPTRIM.SDK.Samples
{
    public static class Extensions
    {

        public static void AppendFormatLine(this StringBuilder builder, string val, params object[] args)
        {
            builder.AppendLine(string.Format(val, args));
        }
    }
}
