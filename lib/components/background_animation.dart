import 'package:flutter/material.dart';
import 'package:g_shoes_revamped/themes/custom_colorscheme.dart';

import 'dart:math' as math;

class BackgroundAnimation extends StatelessWidget {
  const BackgroundAnimation({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;

    return Transform.translate(
      offset: Offset(
        width * 0,
        height * 0.5,
      ),
      child: Transform.scale(
        scaleX: 3,
        child: Transform(
          alignment: Alignment.center,
          transform: Matrix4.skewY(-math.pi / 8),
          // transform: Matrix4.skew(math.pi / 8, -math.pi / 4),
          child: Container(
            decoration: BoxDecoration(
              color: customColorscheme.primary,
              shape: BoxShape.circle,
            ),
          ),
        ),
      ),
    );
  }
}
