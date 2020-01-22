using System;
using System.Collections.Generic;
using System.Text;

namespace MyAplicationCore
{
    public class RuleResult
    {
        public int AlertColor { get; set; }
        public PointColors[] PointColorsArray { get; set; } = new PointColors[0];
    }


    public class PointColors
    {
        public int PointColor { get; set; }
        public double PointValue { get; set; }
    }

    public class RuleResponse
    {
        public int AlertColor { get; set; }
        public double[] PointColorsPaint { get; set; } = new double[0];
    }
}
